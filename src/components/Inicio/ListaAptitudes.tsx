export const ListaAptitudes = () => {
    return (
        <div id={'lista-aptitudes'} style={{ fontSize: 'clamp(0.9em, 3.5vw, 1.2em)' }} className="text-neutral-800 2xl:w-1/3 dark:text-neutral-400">
            <ul className="mx-4 list-outside space-y-4 *:mr-2 *:list-disc marker:text-sky-500 dark:marker:text-orange-500">
                <li className="animate-fade-in-top" style={{animationDelay: '0.2s'}}>Orientado al <strong>diseño</strong> de interfaces <strong>atractivas</strong> y <strong>accesibles</strong> adaptadas a todos los dispositivos.</li>
                <li className="animate-fade-in-top" style={{animationDelay: '0.4s'}}>Valoro la <strong>simplicidad</strong> y el <strong>rendimiento</strong> de la aplicación para una buena <strong>experiencia de usuario</strong>.</li>
                <li className="animate-fade-in-top" style={{animationDelay: '0.6s'}}>Interés por el ciclo de vida completo del software, desde la idea y diseño, hasta el <strong>despliegue y mantenimiento</strong>.</li>
            </ul>
        </div>
    )
}
