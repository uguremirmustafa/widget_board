import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Page404 from './pages/404Page';
import SettingsPage from './pages/SettingsPage';
import JsonComparePage from './pages/widgets/json-compare/JsonComparePage';
import WidgetsLayout from './components/layout/WidgetsLayout';
import ImgBase64Resolver from './pages/widgets/img-base64-resolver/ImgBase64Resolver';
import ImgBase64Encoder from './pages/widgets/img-base64-encoder/ImgBase64Encoder';
import JsonViewer from './pages/widgets/json-viewer/JsonViewer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="widgets" element={<WidgetsLayout />}>
          <Route path="json-compare" element={<JsonComparePage />} />
          <Route path="json-viewer" element={<JsonViewer />} />
          <Route path="img-base64-resolver" element={<ImgBase64Resolver />} />
          <Route path="img-base64-encoder" element={<ImgBase64Encoder />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
