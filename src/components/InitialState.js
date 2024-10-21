import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const InitialState = ({ onUploadSuccess }) => (
    <div className="w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-60 drop-shadow-md py-8 px-6">
        <h1 className="text-4xl font-serif mb-6 text-amber-700 tracking-widest relative animate-flicker">
            Salon de retratos de
            <span className="block text-5xl mt-2 font-bold text-red-700">Madame Victoria</span>
        </h1>
        <div className="w-32 h-1 bg-amber-900 mx-auto mb-8" />
        <p className="mb-8 font-serif italic text-lg text-amber-600 leading-relaxed">
            ¡Adelante, querido invitado!<br/>
            Permítame capturar su belleza en la... <span className="text-red-400 italic">moda</span> de 1887.
        </p>
        <CldUploadWidget
            uploadPreset="upload-unsigned-images"
            onSuccess={onUploadSuccess}
            options={{
                sources: ["local", "camera", "url"],
                multiple: false,
                maxFiles: 1,
                language: "es",
                text: {
                    en: {
                        or: "",
                        url: {
                            inner_title: "Image URL to upload",
                            input_placeholder: "http://remote.site.example/images/remote-image.jpg"
                        },
                        queue: {
                            done: "Done",
                        },
                        menu: {
                            files: "My Files",
                            camera: "Camera",
                            web: "URL",
                        },
                        local: {
                            dd_title_single: "Drag your image here... if you dare",
                            browse: "Select",
                        },
                        camera: {
                            capture: "Capture",
                            cancel: "Cancel",
                            take_pic: "Take a photo and upload it",
                            explanation: "Let the camera capture your... beauty",
                            camera_error: "Error accessing the camera",
                            retry: "Try Again",
                            file_name: "Camera_{{time}}",
                        },
                    },
                    es: {
                        or: "",
                        url: {
                            inner_title: "Dirección de la imagen a cargar",
                            input_placeholder: "http://remote.site.example/images/remote-image.jpg"
                        },
                        queue: {
                            done: "Listo",
                        },
                        menu: {
                            files: "Mis archivos",
                            camera: "Cámara",
                            web: "URL",
                        },
                        local: {
                            dd_title_single: "Arrastra tu imagen aquí... si te atreves",
                            browse: "Seleccionar",
                        },
                        camera: {
                            capture: "Capturar",
                            cancel: "Cancelar",
                            take_pic: "Toma una foto y súbela",
                            explanation: "Deja que la cámara capture tu... belleza",
                            camera_error: "Error al acceder a la cámara",
                            retry: "Volver a intentar",
                            file_name: "Camara_{{time}}",
                        },
                    },
                },
                styles: {
                    palette: {
                        window: "rgba(26, 32, 44, 0.6)", // Dark background with low opacity
                        windowBorder: "#d69e2e", // Darker border
                        tabIcon: "#d69e2e", // Light icons
                        menuIcons: "#d69e2e", // Grey menu icons
                        textDark: "#2d3748", // Light text
                        textLight: "#d69e2e", // Amber text
                        link: "#d69e2e", // Amber links
                        action: "#ed8936", // Orange action buttons
                        inactiveTabIcon: "#65748e", // Darker inactive icons
                        error: "#e53e3e", // Red error messages
                        inProgress: "#3182ce", // Blue progress
                        complete: "#38a169", // Green complete
                        sourceBg: "#2d3748", // Dark source background
                    },
                    frame: {
                        background: "rgba(45, 55, 72, 0.4)", // Dark frame background with low opacity
                    },
                    fonts: {
                        default: null,
                        "'Cinzel', serif": {
                            url: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap",
                            active: true,
                        },
                    },
                },
            }}
        >
            {({ open }) => (
                <button
                    onClick={open}
                    className="bg-amber-900 text-white px-12 py-6 rounded-lg font-serif text-xl hover:bg-red-900 transition-all duration-500 border-2 border-amber-950 shadow-[0_0_15px_rgba(139,69,19,0.3)] transform hover:scale-105 relative overflow-hidden group"
                >
                    <span className="relative z-10">Tómese su retrato</span>
                    <div className="absolute inset-0 bg-red-900/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
            )}
        </CldUploadWidget>
    </div>
);

export default InitialState;