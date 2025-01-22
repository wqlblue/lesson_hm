import { Button, Form, Field, CellGroup, Icon, Uploader,Picker,Popup } from "vant";
const VantUIArr = [Button, Form, Field, CellGroup, Icon, Uploader,Picker,Popup];
export default function enrollVantUI(app) {
  VantUIArr.forEach(item => {
    app.use(item);
  });
}