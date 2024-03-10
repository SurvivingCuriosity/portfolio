export const ListaAptitudes = () => {
    return (
        <div style={{ fontSize: 'clamp(1em, 4vw, 1.2em)' }} className="text-neutral-400 2xl:w-1/3">
            <ul className="mx-4 list-outside space-y-4 *:mr-2 *:list-disc marker:text-orange-500">
                <li className="animate-fade-in-top" style={{animationDelay: '0.3s'}}>Orientado al <strong>diseño</strong> de interfaces <strong>atractivas</strong> y <strong>accesibles</strong> adaptadas a todos los dispositivos.</li>
                <li className="animate-fade-in-top" style={{animationDelay: '0.6s'}}>Valoro la <strong>simplicidad</strong> y el <strong>rendimiento</strong> de la aplicación para una buena <strong>experiencia de usuario</strong>.</li>
                <li className="animate-fade-in-top" style={{animationDelay: '1s'}}>Interés por el ciclo de vida completo del software, desde la idea y diseño, hasta el <strong>despliegue y mantenimiento</strong>.</li>
            </ul>
        </div>
    )
}
