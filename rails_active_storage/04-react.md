## ActiveStorage in React

#### Add react-activestorage-provider

From a terminal:
```bash
yarn add react-activestorage-provider
```

### User the package
This example adds ability to upload an Avatar to User record.  In a Component:

```javascript
import React from "react"
import PropTypes from "prop-types"
import ActiveStorageProvider from 'react-activestorage-provider'

class User extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ActiveStorageProvider
          endpoint={{
            path: '/users',
            model: 'User',
            attribute: 'avatar',
            method: 'POST',
          }}
          render={({ handleUpload, uploads, ready }) => (
            <div>
              <input
                type="file"
                disabled={!ready}
                onChange={e => handleUpload(e.currentTarget.files)}
              />

              {uploads.map(upload => {
                switch (upload.state) {
                  case 'waiting':
                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  case 'uploading':
                    return (
                      <p key={upload.id}>
                        Uploading {upload.file.name}: {upload.progress}%
                      </p>
                    )
                  case 'error':
                    return (
                      <p key={upload.id}>
                        Error uploading {upload.file.name}: {upload.error}
                      </p>
                    )
                  case 'finished':
                    return (
                      <p key={upload.id}>Finished uploading {upload.file.name}</p>
                    )
                }
              })}
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

export default User
```
