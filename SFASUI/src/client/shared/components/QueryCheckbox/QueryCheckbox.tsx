import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { omit } from 'lodash';

import { Checkbox, CheckboxProps } from 'src/client/shared/components/Checkbox';
import { getArrayQuery } from 'src/client/shared/utils/query';

type QueryCheckboxProps = Omit<CheckboxProps, 'value' | 'initialValue' | 'onChange' | 'checked'> & {
    excludeParams?: string[];
    checkboxName: string;
    onSuccess?: (() => void) | (() => Promise<void>);
    name: string;
};

export const QueryCheckbox = ({
    name,
    checkboxName,
    excludeParams = ['page'],
    onSuccess,
    className,
    ...rest
}: QueryCheckboxProps) => {
    const { query, push } = useRouter();

    const onCheckboxChange = useCallback(
        async (value) => {
            const cleanedQuery = omit(query, [name, ...excludeParams]);
            const currentQueryValue = getArrayQuery(query[name]);

            if (!value) {
                const newQuery = currentQueryValue.filter((item) => item !== checkboxName);

                if (newQuery.length > 0) {
                    await push({ query: { ...cleanedQuery, [name]: newQuery } });
                } else {
                    await push({ query: cleanedQuery });
                }
            } else {
                const newQuery = [...currentQueryValue, checkboxName];
                await push({ query: { ...cleanedQuery, [name]: newQuery } });
            }

            if (onSuccess) {
                await onSuccess();
            }
        },
        [push, query, excludeParams, onSuccess, name, checkboxName]
    );


    return (
        <Checkbox className={className} checked={query[name]?.includes(checkboxName)} onChange={onCheckboxChange} {...rest} />
    );
};