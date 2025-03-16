import Server from './core/server'

const bootstrap = async () => {
  try {
    const server = new Server()
    server.up(+process.env.APP_PORT)
  } catch (error) {
    console.info('Error occured while bootstrapping the server')
    console.error(error)
  }
}

bootstrap()
