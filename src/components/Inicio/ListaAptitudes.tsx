export const ListaAptitudes = () => {
    return (
        <div id={'lista-aptitudes'} style={{ fontSize: 'clamp(0.9em, 3.5vw, 1.2em)' }} className="mt-12 py-0 text-neutral-800 md:py-20 xl:py-0 2xl:w-1/3 dark:text-neutral-400">
            <ul className="mx-4 list-outside space-y-4 *:mr-2 *:list-disc dark:marker:text-orange-500">
                <li className="animate-fade-in-top" style={{ animationDelay: '0.2s' }}>Oriented towards <strong>designing</strong> <strong>attractive</strong> and <strong>accessible</strong> interfaces adapted to all devices.</li>
                <li className="animate-fade-in-top" style={{ animationDelay: '0.4s' }}>I value the <strong>simplicity</strong> and <strong>performance</strong> of the application for a good <strong>user experience</strong>.</li>
                <li className="animate-fade-in-top" style={{ animationDelay: '0.6s' }}>Interest in the complete software lifecycle, from the idea and design to <strong>deployment and maintenance</strong>.</li>
            </ul>
        </div>
    )
}
