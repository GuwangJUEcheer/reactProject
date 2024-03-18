// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// 创建 Context
const UserContext = createContext();

// 创建一个自定义 Hook，方便子组件访问 Context
export const useUser = () => useContext(UserContext);

// 创建 Provider 组件
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // 这里存储用户信息

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
