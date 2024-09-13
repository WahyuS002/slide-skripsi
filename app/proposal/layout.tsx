import { AnimatePresence } from "framer-motion";

export default function LayoutProposal({ children }: { children: React.ReactNode }) {
    return (
        <AnimatePresence mode="wait" initial={false}>
            {children}
        </AnimatePresence>
    );
}
