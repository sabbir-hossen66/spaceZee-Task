# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

```
 <div className="flex flex-col space-y-4 p-6">
      {/* Default Button */}
      <DynamicButton text="Default Button" />

      {/* Custom Background Color */}
      <DynamicButton text="Red Button" bgColor="bg-red-500" />

      {/* Button with Icon */}
      <DynamicButton text="Facebook" bgColor="bg-blue-600" icon={FaFacebookF} />

      {/* Button with Icon & Different Text Color */}
      <DynamicButton text="Twitter" bgColor="bg-blue-400" textColor="text-black" icon={FaTwitter} />

      {/* Button with Extra Custom Styling */}
      <DynamicButton text="Large Button" bgColor="bg-green-500" extraClasses="text-lg px-10 py-4" />
    </div>
    ```

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
