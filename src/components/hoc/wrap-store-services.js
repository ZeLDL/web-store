import React from 'react';
import { StoreServicesComsumer } from '../store-services-context';

const wrapStoreServices = (Wrapped) => {
    return (props) => {
        return (
            <StoreServicesComsumer>
                {
                    (storeServices) => {
                        return ( <Wrapped {...props}
                            storeServices={storeServices} />);
                    }
                }
            </StoreServicesComsumer>
        );
    }
};

export default wrapStoreServices;