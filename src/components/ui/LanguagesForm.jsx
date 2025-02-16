import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import Header from './Header';
import { useState } from 'react';
const LanguagesForm = () => {
  const navigate = useNavigate();

const [isModalOpen, setIsModalOpen] = useState(false);

const handleFinishClick = () => {
    setIsModalOpen(true);
};

return (
    <main>
        <Header />
        <div className="flex justify-center min-h-screen m-8">
            <div className="w-4/5 max-w-4xl mb-5">
                <header className='justify-center items-center'>
                    <p className="text-sm text-gray-600">Paso 7 de 7</p>
                    <h2 className="text-xl font-bold my-2">Idiomas</h2>
                    <p className="text-sm text-gray-500 mb-4">Completa el siguiente formulario para estar más cerca de nosotros</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    <InputField label="Idioma" id="idioma" />
                    <InputField label="Nivel" id="nivel" />
                    <InputField label="Certificado" id="certificado" />
                </div>
                <div className="flex justify-between mt-5">
                    <button
                        className="bg-gray-500 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 cursor-pointer"
                        onClick={() => navigate('/achievements')}
                    >
                        Regresar
                    </button>
                    <button
                        className="bg-button-primary text-white px-4 py-1.5 rounded-lg hover:bg-button-secondary cursor-pointer"
                        onClick={handleFinishClick}
                    >
                        Finalizar
                    </button>
                </div>
            </div>
        </div>
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                <div className="bg-white p-5 rounded-lg relative shadow-lg shadow-gray">
                    <h2 className="text-xl font-bold m-4">Datos Enviados Correctamente</h2>
                    <div className='mb-4 text-center'>
                        <p>Muchas gracias por su compromiso!</p>
                        <p className='text-button-primary'>Nosotros lo contactaremos</p>
                    </div>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-600 cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        )}
    </main>
);
};

export default LanguagesForm;
