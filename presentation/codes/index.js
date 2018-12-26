window.onerror = function errorHandler(message, source, lineno, colno, error) {
  // your error handler
  console.table({ message, source, lineno, colno, error })
  return true
}

run()

try {
  setTimeout(() => {
    run()
  }, 0)
} catch (error) {
  console.log('error:', error)
}

Promise.resolve(1)
  .then(data => data.split(''))
  .catch(console.log)

const getUser = async () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve({
        name: '张三',
        id: 1,
      })
    }, 0),
  )

;(async () => {
  try {
    const user = await getUser()
    console.log(user)
  } catch (error) {
    console.error(error)
  }
})()

window.addEventListener('unhandledrejection', e => {
  e.preventDefault()
  console.log(e.reason.stack)
})

new Promise((resolve, reject) => reject(new Error('ee')))

document.addEventListener('error', (e) => {
  console.log(e.target.tagName.toLowerCase());
  console.log(e.target.src);
}, true)
