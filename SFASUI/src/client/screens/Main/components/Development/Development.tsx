import Image from 'next/image';
import React from 'react';

import { Contacts } from 'src/client/shared/components/Contacts';

import { EmailForm } from '../EmailForm';

import styles from './Development.module.css';

export const Development = () => {
    return (
        <section className={styles['Development']}>
            <div className={styles['Development-Content']}>
                <h2 className={styles['Development-BigHeading']}>Давайте развивать проект вместе!</h2>

                <div className={styles['Development-Hint']}>
                    <div className={styles['Development-HintImage']}>
                        <Image width={52} height={52} src="/images/main/Emoji.svg" layout="fixed" />
                    </div>
                    <p className={styles['Development-HintText']}>
                        Если у Вас есть пожелания и замечания или Вы знаете объект, который мы ещё не учли, ниже
                        выберите форму для заполнения
                    </p>
                </div>

                <div className={styles['Development-MainBlock']}>
                    <EmailForm />
                    <div className={styles['Development-ContactsBlock']}>
                        <Contacts className={styles['Development-Contacts']} />
                    </div>
                </div>
            </div>
        </section>
    );
};