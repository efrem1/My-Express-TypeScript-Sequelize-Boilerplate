import app from "./index";
import config from './config/AppConfig';

app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}`);
});
