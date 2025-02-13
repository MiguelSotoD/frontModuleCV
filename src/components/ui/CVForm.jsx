import InputField from './InputField';

const CVForm = () => {
return (
    <main>
            <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-white  rounded-lg shadow-md w-4/5 max-w-4xl">
                            <header className='justify-center items-center'>
                                    <p className="text-sm text-gray-600">Paso 1 de 7</p>
                                    <h2 className="text-xl font-bold my-2">Datos personales</h2>
                                    <p className="text-sm text-gray-500 mb-4">Completa el siguiente formulario para estar más cerca de nosotros</p>
                            </header>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                                    <InputField label="Curp" id="curp" />
                                    <InputField label="Domicilio" id="domicilio" />
                                    <InputField label="Matricula" id="matricula" />
                                    <InputField label="Colonia" id="colonia" />
                                    <InputField label="Codigo postal" id="codigo-postal" />
                                    <InputField label="Nombre" id="nombre" />
                                    <InputField label="Correo electrónico" id="correo-electronico" type="email" />
                                    <InputField label="Apellidos" id="apellidos" />
                                    <InputField label="Numero de teléfono" id="numero-telefono" />
                                    <InputField label="Fecha de nacimiento" id="fecha-nacimiento" type="date" />
                                    <InputField label="Tipo de sangre" id="tipo-sangre" />
                                    <InputField label="Resumen profesional" id="resumen-profesional" className="col-span-2" />
                            </div>
                    </div>
            </div>
    </main>
);
};

export default CVForm;
