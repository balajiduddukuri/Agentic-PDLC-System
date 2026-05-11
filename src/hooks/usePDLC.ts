import { useState, useCallback } from 'react';

/**
 * usePDLC: A hook to manage the state of the Agentic PDLC pipeline in the UI.
 * Author: Balaji Duddukuri
 */

export enum PDLCStatus {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  WAITING_FOR_GATE = 'WAITING_FOR_GATE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export function usePDLC() {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [status, setStatus] = useState<PDLCStatus>(PDLCStatus.IDLE);
  const [history, setHistory] = useState<string[]>([]);
  const [logs, setLogs] = useState<{ msg: string; type: 'info' | 'success' | 'warn' | 'error' }[]>([]);

  const addLog = useCallback((msg: string, type: 'info' | 'success' | 'warn' | 'error' = 'info') => {
    setLogs(prev => [...prev, { msg, type }].slice(-50));
  }, []);

  const startPipeline = useCallback((request: string) => {
    setLogs([]);
    setStatus(PDLCStatus.RUNNING);
    setCurrentStage(1);
    setHistory([`Started: ${request}`]);
    addLog(`INITIATING PDLC FOR REQUEST: "${request}"`, 'info');
    addLog(`Authorizing Agent: Balaji Duddukuri`, 'success');
  }, [addLog]);

  const approveGate = useCallback(() => {
    if (status === PDLCStatus.WAITING_FOR_GATE) {
      setStatus(PDLCStatus.RUNNING);
      setCurrentStage(prev => prev + 1);
    }
  }, [status]);

  const advanceStage = useCallback(() => {
    setCurrentStage(prev => {
      const next = prev + 1;
      if (next > 11) {
        setStatus(PDLCStatus.COMPLETED);
        return prev;
      }
      return next;
    });
  }, []);

  return {
    currentStage,
    status,
    history,
    logs,
    startPipeline,
    approveGate,
    advanceStage,
    setCurrentStage,
    addLog
  };
}
