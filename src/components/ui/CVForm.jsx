import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import InputFieldShort from './InputFieldShort';
import Header from './Header';

const CVForm = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Header />
      <div className="flex justify-center items-center min-h-screen m-8">
        <div className="w-4/5 max-w-4xl mb-5">
          <header className='justify-center items-center'>
            <p className="text-sm text-gray-600">Paso 1 de 7</p>
            <h2 className="text-xl font-bold my-2">Datos personales</h2>
            <p className="text-sm text-gray-500 mb-4">Completa el siguiente formulario para estar más cerca de nosotros</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <InputField label="Nombre" id="nombre" />
            <InputField label="Apellidos" id="apellidos" />
            <InputFieldShort label="Fecha de nacimiento" id="fecha-nacimiento" type="date" />
            <InputFieldShort label="Tipo de sangre" id="tipo-sangre" />
            <InputField label="Curp" id="curp" />
            <InputField label="Correo electrónico" id="correo-electronico" type="email" />
            <InputField label="Numero de teléfono" id="numero-telefono" />
            <InputFieldShort label="Matricula" id="matricula" />
            <InputField label="Domicilio" id="domicilio" />
            <InputField label="Colonia" id="colonia" />
            <InputFieldShort label="Codigo postal" id="codigo-postal" />
            <InputField label="Resumen profesional" id="resumen-profesional" className="col-span-2" />
          </div>
          <div className="flex justify-end mt-5">
            <button
              className="bg-button-primary text-white px-4 py-1.5 rounded-lg hover:bg-button-secondary cursor-pointer"
              onClick={() => navigate('/education')}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CVForm;
