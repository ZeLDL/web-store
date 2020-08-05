import React from 'react';
import { StoreServicesComsumer } from '../store-services-context';

const wrapStoreServices = () => (Wrapped) => {
    return (props) => {
        return (
            <StoreServicesComsumer>
                {
                    (MyStoreServices) => {
                        return ( <Wrapped {...props}
                            MyStoreServices={MyStoreServices} />);
                    }
                }
            </StoreServicesComsumer>
        );
    }
};

export default wrapStoreServices;