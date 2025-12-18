import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  // const hiidenAnimationState = { opacity: 0, y: 30 }

  return createPortal(
    <>
      <motion.div
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ opacity: 1, pointerEvents: 'auto' }}
        exit={{ opacity: 0, pointerEvents: 'none' }}
        className="backdrop"
        onClick={onClose} />
      {/* <div className="backdrop" onClick={onClose} /> */}
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30, pointerEvents: 'none' },
          visible: { opacity: 1, y: 0, pointerEvents: 'auto' }
        }}
        initial='hidden'
        animate='visible'
        exit='hidden'
        open
        className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
