// 链表hook
let isMount = true;
let workInProgressHook = null;

const fiber = {
  stateNode: App,
  memoizedState: null
}

function useState(initialState){
  let hook
  // first render
  if(isMount){
    hook = {
      memoizedState: initialState,
      queue: { // update queue
        pending: null,
      },
      next: null // point next hook 
    }
    if(!fiber.memoizedState){
      fiber.memoizedState = hook;
    }else {
      fiber.memoizedState.next = hook;
    }
    workInProgressHook = hook;
  }else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }

  let baseState = hook.memoizedState

  if(hook.queue.pending){
    const newVal = hook.queue.pending.action(hook.memoizedState)
    hook.memoizedState = newVal;
    baseState = newVal
    hook.queue.pending = null;
  }
  hook.memoizedState = baseState;
  return [
    baseState,
    (action) => dispatchAction(hook.queue, action)
  ]
}

function dispatchAction(queue, action){
  const update = {
    action,
    next: null,
  }
  // if(queue.pending === null){
  //   // 环链表
  //   update.next = update
  // }else {
  //   // 环链表插入// 
  //   update.next = queue.pending.next
  //   queue.pending.next = update;
  // }
  // update hook queque
  if(!queue.pending){
    queue.pending = update
  }
  schedule();
}

function schedule(){
  workInProgressHook = fiber.memoizedState;
  const app = fiber.stateNode();
  isMount = false;
  return app;
}


function App(){
  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(3)

  console.log('num', num)
  console.log('num', num1)

  return {
    onClick(){
      setNum(num => num +1)
      setNum(num => num +1)
    },
    onFocus(){
      setNum1(num => num + 3)
    }
  }
}

window.app = schedule()