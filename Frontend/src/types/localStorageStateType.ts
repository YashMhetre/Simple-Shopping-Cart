export interface LoadingStateProps {
  isLoaded: boolean;
}

export interface StorageInfo {
  cartSize: number;
  backupSize: number;
  hasBackup: boolean;
  backupDate: string | null;
}
