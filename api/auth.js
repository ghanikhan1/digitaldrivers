import basicAuth from 'basic-auth';

const auth = { login: 'admin', password: 'letmeintodigitaldrivers' }; // Replace with your credentials

export default function handler(req, res) {
  const user = basicAuth(req);

  if (!user || user.name !== auth.login || user.pass !== auth.password) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    res.status(401).send('Authentication required.');
  } else {
    res.status(200).send('Authentication successful.');
  }
}
