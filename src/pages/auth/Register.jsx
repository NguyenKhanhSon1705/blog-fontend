import { Form, Input, Button } from "antd";
import { toast } from "react-toastify";

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    toast.success("Đăng ký thành công!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    toast.error("Vui lòng điền đầy đủ thông tin!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: 400,
          padding: 20,
          border: "1px solid #ddd",
          borderRadius: 8,
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Đăng Ký</h2>
        <Form
          form={form}
          layout="vertical"
          name="registerForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {/* Full Name Field */}
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên!" },
              { min: 3, message: "Họ và tên phải có ít nhất 3 ký tự!" },
            ]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>

          {/* Username Field */}
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
              { min: 4, message: "Tên đăng nhập phải có ít nhất 4 ký tự!" },
            ]}
          >
            <Input placeholder="Nhập tên đăng nhập" />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              {
                min: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự!",
              },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
