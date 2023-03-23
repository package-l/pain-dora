import '../styles/PageSizeWarning.scss'

const PageSizeWarning = () => {
  return (
    <div className="page-warning">
        <div className="warning-message">Make window bigger.</div>
        <div className="content-wrapper">
            <h1>That's better...</h1>
            <p>Resize the browser window below a height of <code>400px</code> or a width of <code>600px</code> and you won't see the content anymore. 
            </p>A warning message will be displayed.
        </div>
    </div>
  )
}

export default PageSizeWarning