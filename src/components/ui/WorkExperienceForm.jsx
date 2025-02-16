import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import Header from './Header';

const WorkExperienceForm = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Header />
      <div className="flex justify-center min-h-screen m-8">
        <div className="w-4/5 max-w-4xl mb-5">
          <header className='justify-center items-center'>
            <p className="text-sm text-gray-600">Paso 3 de 7</p>
            <h2 className="text-xl font-bold my-2">Experiencia Laboral</h2>
            <p className="text-sm text-gray-500 mb-4">Completa el siguiente formulario para estar más cerca de nosotros</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <InputField label="Empresa" id="empresa" />
            <InputField label="Cargo" id="cargo" />
            <InputField label="Fecha de Inicio" id="fecha-inicio" type="date" />
            <InputField label="Fecha de Finalización" id="fecha-finalizacion" type="date" />
            <InputField label="Referencia" id="referencia" />
            <InputField label="Anotaciones" id="anotaciones" />
            <InputField label="Actual" id="actual" />
            <InputField label="Funciones" id="funciones" />
          </div>
          <div className="flex justify-between mt-5">
            <button
              className="bg-gray-500 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate('/education')}
            >
              Regresar
            </button>
            <button
              className="bg-button-primary text-white px-4 py-1.5 rounded-lg hover:bg-button-secondary cursor-pointer"
              onClick={() => navigate('/skills')}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkExperienceForm;
