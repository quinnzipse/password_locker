
const withLogging = (callback: Function) => {
    return async (req, res) => {
        console.log(`${req.method} - ${req.url}`)
        return callback(req, res)
    }
}

export default withLogging