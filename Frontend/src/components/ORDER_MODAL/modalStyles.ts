import { CSSProperties } from 'react';

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  } as CSSProperties,

  header: {
    display: 'block',
    borderBottom: 'none'
  } as CSSProperties,

  headerCenter: {
    textAlign: 'center' as const,
    marginBottom: '20px'
  },

  successIconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4ade80, #10b981)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 15px',
    boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)'
  } as CSSProperties,

  successIcon: {
    fontSize: '36px',
    color: '#fff',
    fontWeight: 'bold' as const,
    lineHeight: 1
  } as CSSProperties,

  headerTitle: {
    color: '#10b981',
    margin: '0 0 8px 0',
    fontSize: '24px',
    fontWeight: '700'
  } as CSSProperties
};