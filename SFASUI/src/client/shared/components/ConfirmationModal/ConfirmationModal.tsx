import { ModalProps } from 'antd';

import { Modal } from 'src/client/shared/components/Modal';
import { Button } from 'src/client/shared/components/Button';

import styles from './ConfirmationModal.module.css';

type ConfirmationModalProps = ModalProps & {
    title: string;
    description: string;
};

export const ConfirmationModal = ({ title, onOk, onCancel, description, ...props }: ConfirmationModalProps) => {
    return (
        <Modal
            open
            onCancel={onCancel}
            footer={
                <div className={styles['ConfirmationModal-ButtonSection']}>
                    <Button className={styles['ConfirmationModal-Button_confirmation']} text="Да" onClick={onOk} />
                    <Button className={styles['ConfirmationModal-Button_cancel']} text="Нет" onClick={onCancel} />
                </div>
            }
            {...props}
        >
            <h2 className={styles['ConfirmationModal-Title']}>{title}</h2>
            <p className={styles['ConfirmationModal-Description']}>{description}</p>
        </Modal>
    );
};