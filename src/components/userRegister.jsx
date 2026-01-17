import { useState } from "react";

const TerminalInput = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
      <label className="min-w-[140px] font-bold tracking-widest uppercase">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          bg-transparent
          border-0 border-b-2 border-[#f2a20d]/40
          focus:border-[#f2a20d]
          outline-none
          text-[#f2a20d]
          placeholder-[#f2a20d]/30
          uppercase
          tracking-wider
        "
      />
    </div>
  );
};

const UserRegister = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [users, setUsers] = useState([]);

  const handleEvent = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    if (!form.name || !form.email || form.age <= 0) return;

    if (users.some(u => u.name === form.name || u.email === form.email)) {
      alert("Nombre o email en uso");
      return;
    }

    setUsers([...users, form]);
    setForm({ name: "", email: "", age: "" });
  };

  const deleteUser = (e) => {
    const index = Number(e.target.value);
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="relative min-h-screen bg-[#0c0a05] text-[#f2a20d] font-mono flex items-center justify-center overflow-hidden">

      {/* SCANLINES */}
      <div
        className="
          fixed inset-0 pointer-events-none z-50
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.4))]
          bg-[length:100%_4px]
        "
      />

      {/* TERMINAL WINDOW */}
      <div className="relative w-full max-w-2xl border-2 border-[#f2a20d] bg-[#221c10]/80 p-8 sm:p-10">

        {/* CORNER DECORATION */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#f2a20d] -mt-1 -ml-1" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#f2a20d] -mt-1 -mr-1" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#f2a20d] -mb-1 -ml-1" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#f2a20d] -mb-1 -mr-1" />

        {/* HEADER */}
        <div className="mb-10 select-none">
          <h1 className="text-3xl font-bold tracking-widest mb-4">
            SECURE_REGISTRY
          </h1>

          <div className="text-sm opacity-70 space-y-1">
            <p>&gt; SYSTEM_READY</p>
            <p className="pl-4">&gt; USER_ALLOCATION_PROTOCOL_V1</p>
            <p className="pl-4">
              &gt; ENCRYPTION_KEY: <span className="animate-pulse">ACTIVE</span>
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="space-y-6">
          <TerminalInput
            label="SET_NAME_:"
            name="name"
            type="text"
            value={form.name}
            onChange={handleEvent}
            placeholder="ENTER_NAME"
          />

          <TerminalInput
            label="SET_EMAIL_:"
            name="email"
            type="email"
            value={form.email}
            onChange={handleEvent}
            placeholder="ENTER_EMAIL"
          />

          <TerminalInput
            label="SET_AGE_:"
            name="age"
            type="number"
            value={form.age}
            onChange={handleEvent}
            placeholder="AGE"
          />
        </div>

        {/* ACTION */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-sm animate-pulse">&gt; AWAITING_INPUT...</p>

          <button
            onClick={addUser}
            className="
              px-8 py-3
              border border-[#f2a20d]
              uppercase tracking-widest
              hover:bg-[#f2a20d]
              hover:text-[#221c10]
              transition
            "
          >
            INITIATE_REGISTRATION
          </button>
        </div>

        {/* USERS LIST */}
        {users.length > 0 && (
          <div className="mt-12 border-t border-[#f2a20d]/30 pt-4 space-y-2 text-sm">
            {users.map((u, i) => (
              <div key={i} className="flex justify-between">
                <span>
                  {u.name} | {u.email} | {u.age}
                </span>
                <button
                  value={i}
                  onClick={deleteUser}
                  className="text-red-400 hover:text-red-600"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default UserRegister;
