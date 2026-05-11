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

  const startPipeline = useCallback((request: string) => {
    setStatus(PDLCStatus.RUNNING);
    setCurrentStage(1);
    setHistory([`Started: ${request}`]);
    // Logic to trigger real agent would go here
  }, []);

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
    startPipeline,
    approveGate,
    advanceStage,
    setCurrentStage
  };
}
