import { useState } from 'react';

import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { Toggle } from 'src/client/shared/components/Toggle';
import { engToRusDay, WorkingHoursType } from 'src/client/shared/types/facilities';

import styles from './WorkingHours.module.css';

type WorkingHoursProps = {
    hours: WorkingHoursType;
};

export const WorkingHours = ({ hours }: WorkingHoursProps) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className={styles['WorkingHours']}>
            <TextWithIcon iconType='time'>
                <div className={styles['WorkingHours-ToggleWrapper']}>
                    <span className={styles['WorkingHours-ToggleText']}>Часы работы</span>
                    <Toggle isOpened={isOpened} onClick={() => setIsOpened(!isOpened)} />
                </div>
            </TextWithIcon>
            {isOpened && (
                <ul className={styles['WorkingHours-Details']}>
                    {Object.keys(hours).map((day) => (
                        <li className={styles['WorkingHours-DetailsItem']}>
                            <span className={styles['WorkingHours-Day']}>{engToRusDay[day]}</span>
                            <span className={styles['WorkingHours-Value']}>
                                {hours[day].open ? `${hours[day].since} - ${hours[day].to}` : 'Закрыто'}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
