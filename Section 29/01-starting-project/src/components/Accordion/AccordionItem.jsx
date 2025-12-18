import { createContext, useContext } from "react"

const AccordItemContext = createContext()
export function useAccordionItemContext() {
    const ctx = useContext(AccordItemContext)
    if (!ctx)
        throw new Error('Accordion-related component must be wraped ny <Accordion>.')

    return ctx;
}

export default function AccordionItem({ id, className, children }) {


    return (
        <AccordItemContext.Provider value={id}>
            <li className={className}>
                {children}
            </li>
        </AccordItemContext.Provider>

    )
}