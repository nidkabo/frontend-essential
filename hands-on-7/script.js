const login = async (username, password) => {
  const loginBody = { username: username, password: password }

  try {
    const res = await fetch('https://api.learnhub.thanayut.in.th/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginBody),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`)
    }

    return data.accessToken
  } catch (err) {
    alert(err)
  }
}

const getInformation = async () => {
  const token = localStorage.getItem('token')

  try {
    const res = await fetch('https://api.learnhub.thanayut.in.th/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application-json',
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`)
    }

    return data
  } catch (err) {
    console.log(err)
  }
}

const main = () => {
  const usernameInput = document.getElementById('username')

  const passwordInput = document.getElementById('password')

  const submitButton = document.getElementById('submit')

  const getInfoButton = document.getElementById('get-info')

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault()

    if (!passwordInput.value || !usernameInput.value) {
      alert('Please input something')
      return
    }

    const accessToken = await login(usernameInput.value, passwordInput.value)
    if (!accessToken) return

    localStorage.setItem('token', accessToken)
  })

  getInfoButton.addEventListener('click', async (e) => {
    e.preventDefault()

    const getInfo = await getInformation()

    console.log(getInfo)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  main()
})
