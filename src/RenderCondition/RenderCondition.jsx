import React from "react";

const RenderCondition = () => {
    // false: chưa login
    // true : login rồi
    const isLogin = false;

    const renderLogin = () => {
        if (isLogin) {
            return (
                <div>
                    <h3>Hello User</h3>
                    <ul>
                        <li>Thông tin cá nhân</li>
                        <li>Đổi mật khẩu</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
            );
        } else {
            return <button>Đăng nhập</button>;
        }
    };
    return (
        <div>
            <h1 className="text-center text-red-500 text-2xl">
                RenderCondition
            </h1>

            {/* dùng toán tử ba ngôi khi cần xử lý những điều kiện đơn giản  */}
            {/* {isLogin ? <h3>Hello User</h3> : <button>Đăng nhập</button>} */}

            {renderLogin()}
            {/* {}: binding data  */}
        </div>
    );
};

export default RenderCondition;
