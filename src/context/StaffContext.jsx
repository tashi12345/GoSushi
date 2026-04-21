import React, { createContext, useContext, useReducer, useEffect } from 'react';

const StaffContext = createContext();

const INITIAL_ORDERS = [
  { id: 'ORD-1001', customer: 'Ahmed Khan', phone: '+92 300 1112233', branch: 'br-1', items: [{ name: 'Crunchy Maki Roll', qty: 2, price: 1599 }, { name: 'Matcha Latte', qty: 1, price: 599 }], total: 3797, status: 'incoming', time: new Date(Date.now() - 120000).toISOString(), address: 'House 42, Street 5, Gulberg III' },
  { id: 'ORD-1002', customer: 'Sara Ali', phone: '+92 321 4455667', branch: 'br-1', items: [{ name: 'Grand Platter (6 Person)', qty: 1, price: 7199 }, { name: 'Edamame', qty: 2, price: 499 }], total: 8197, status: 'preparing', time: new Date(Date.now() - 600000).toISOString(), address: '12-C, Model Town' },
  { id: 'ORD-1003', customer: 'Usman Tariq', phone: '+92 333 7788990', branch: 'br-2', items: [{ name: 'Dragon Roll', qty: 1, price: 2499 }, { name: 'Miso Soup', qty: 1, price: 399 }], total: 2898, status: 'ready', time: new Date(Date.now() - 1800000).toISOString(), address: 'Y-Block, DHA Phase 3' },
  { id: 'ORD-1004', customer: 'Fatima Noor', phone: '+92 345 1122334', branch: 'br-2', items: [{ name: 'Rainbow Roll', qty: 1, price: 2699 }], total: 2699, status: 'completed', time: new Date(Date.now() - 3600000).toISOString(), address: 'Z-Block, DHA Phase 5' },
  { id: 'ORD-1005', customer: 'Hassan Raza', phone: '+92 311 9988776', branch: 'br-1', items: [{ name: 'BYOB Classic', qty: 3, price: 1279 }, { name: 'Ramune Soda', qty: 3, price: 349 }], total: 4884, status: 'incoming', time: new Date(Date.now() - 60000).toISOString(), address: '55-A, Johar Town' },
];

function staffReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_ORDER_STATUS':
      return { ...state, orders: state.orders.map(o => o.id === action.payload.id ? { ...o, status: action.payload.status } : o) };
    case 'ADD_ORDER':
      return { ...state, orders: [action.payload, ...state.orders] };
    case 'ADD_BRANCH':
      return { ...state, branches: [...state.branches, action.payload] };
    case 'TOGGLE_BRANCH':
      return { ...state, branches: state.branches.map(b => b.id === action.payload ? { ...b, status: b.status === 'active' ? 'inactive' : 'active' } : b) };
    default: return state;
  }
}

export function StaffProvider({ children }) {
  const [state, dispatch] = useReducer(staffReducer, {
    orders: INITIAL_ORDERS,
    branches: [
      { id: 'br-1', name: 'Go Sushi — Gulberg', city: 'Lahore', address: 'Main Boulevard, Gulberg III', phone: '+92 300 1234567', status: 'active' },
      { id: 'br-2', name: 'Go Sushi — DHA', city: 'Lahore', address: 'Y-Block, Phase 3, DHA', phone: '+92 300 7654321', status: 'active' },
      { id: 'br-3', name: 'Go Sushi — Johar Town', city: 'Lahore', address: 'Block G1, Johar Town', phone: '+92 300 9876543', status: 'inactive' },
    ],
  });

  return (
    <StaffContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StaffContext.Provider>
  );
}

export function useStaff() {
  const ctx = useContext(StaffContext);
  if (!ctx) throw new Error('useStaff must be used within StaffProvider');
  return ctx;
}
