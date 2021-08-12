// 数组hooks

let isMount = true // first render flag
let workInProgressHook = null
const fiber = {
  stateNode: App,
  hooks: null,
  hookIdx: null,
}

function useState(initialState){
  let hook
  // first render
  if(isMount){
    hook = {
      val: initialState,
      queue: {
        pending: null
      }
    }
    if(!fiber.hooks){
      fiber.hooks = [hook]
      fiber.hookIdx = 0;
    }else{
      fiber.hooks.push(hook)
    }
    workInProgressHook = hook
  }else {
    
    workInProgressHook = fiber.hooks[fiber.hookIdx]
    hook = workInProgressHook;
    ++fiber.hookIdx
  }
  
  if(hook.queue.pending){
    const newVal = hook.queue.pending.action(workInProgressHook.val)
    workInProgressHook.val = newVal
    hook.queue.pending = null
  }
  let baseState = workInProgressHook.val
  return [
    baseState,
    (action) => {
      const update = {
        action,
      }
      hook.queue.pending = update
      schedule()
    }
  ]
}

function schedule(){
  fiber.hookIdx = 0;
  workInProgressHook = Array.isArray(fiber.hooks) ? fiber.hooks[fiber.hookIdx] : null;
  const app = App();
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
    },
    onFocus(){
      setNum1(num => num + 3)
    }
  }
}

window.app = schedule()