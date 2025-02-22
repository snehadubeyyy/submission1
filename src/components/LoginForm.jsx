import { useState } from "react";
import styled from "styled-components";

export default function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <Label>Email</Label>
      <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <Label>Password</Label>
      <Input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <Button type="submit">Login</Button>
    </FormContainer>
  );
}

// Styled Components
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: #4db8ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }
`;
