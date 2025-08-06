
from app import app
import os

# For Railway deployment - no app.run() needed
# Railway will use gunicorn to run the app

if __name__ == '__main__':
    # Only for local development
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
