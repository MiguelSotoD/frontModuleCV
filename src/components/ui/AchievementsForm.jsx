import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import Header from './Header';

const AchievementsForm = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Header />
      <div className="flex justify-center min-h-screen m-8">
        <div className="w-4/5 max-w-4xl mb-5">
          <header className='justify-center items-center'>
            <p className="text-sm text-gray-600">Paso 6 de 7</p>
            <h2 className="text-xl font-bold my-2">Logros/Reconocimientos</h2>
            <p className="text-sm text-gray-500 mb-4">Completa el siguiente formulario para estar más cerca de nosotros</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <InputField label="Nombre" id="nombre" />
            <InputField label="Institución" id="institucion" />
            <InputField label="Fecha" id="fecha" type="date" />
            <InputField label="Tipo" id="tipo" />
          </div>
          <div className="flex justify-between mt-5">
            <button
              className="bg-gray-500 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate('/certifications')}
            >
              Regresar
            </button>
            <button
              className="bg-button-primary text-white px-4 py-1.5 rounded-lg hover:bg-button-secondary cursor-pointer"
              onClick={() => navigate('/languages')}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AchievementsForm;
