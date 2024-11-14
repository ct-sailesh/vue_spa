export default function errorHandler(app) {
    app.config.errorHandler = (err, instance, info) => {
      // Log error to console for debugging
      console.error('Error Handler:', err);
      console.info('Error Instance:', instance);
      console.info('Error Info:', info);
  
      // Example: Report error to an external service
      reportError(err, instance, info);
    };
  
    function reportError(err, instance, info) {
      fetch('https://your-error-logging-service.com/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: err.toString(),
          component: instance ? instance.$options.name : null,
          info,
          time: new Date(),
        }),
      }).catch(error => console.error('Failed to report error:', error));
    }
  }