import { ChevronRight, Fingerprint, Shield, Sliders, Database } from "lucide-react";
import { Switch } from "../components/ui/switch";
import { useState } from "react";

export function Settings() {
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [autoImportSMS, setAutoImportSMS] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-14 px-6 flex items-center justify-center border-b border-border bg-card">
        <h1 className="text-xl font-semibold text-foreground">Settings</h1>
      </header>

      {/* Content */}
      <div className="pb-6">
        {/* Security Section */}
        <div className="mt-6">
          <div className="px-6 mb-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Security
            </h3>
          </div>
          <div className="bg-card">
            <div className="w-full h-14 px-6 flex items-center justify-between border-b border-border">
              <div className="flex items-center gap-3">
                <Fingerprint size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Biometric Authentication
                </span>
              </div>
              <Switch
                checked={biometricEnabled}
                onCheckedChange={setBiometricEnabled}
              />
            </div>
            <button className="w-full h-14 px-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Change PIN
                </span>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Reconciliation Settings */}
        <div className="mt-6">
          <div className="px-6 mb-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Reconciliation
            </h3>
          </div>
          <div className="bg-card">
            <button className="w-full h-14 px-6 flex items-center justify-between hover:bg-accent/50 transition-colors border-b border-border">
              <div className="flex items-center gap-3">
                <Sliders size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Confidence Threshold
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">75%</span>
                <ChevronRight size={20} className="text-muted-foreground" />
              </div>
            </button>
            <button className="w-full h-14 px-6 flex items-center justify-between hover:bg-accent/50 transition-colors border-b border-border">
              <div className="flex items-center gap-3">
                <Sliders size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Time Window Tolerance
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">48 hours</span>
                <ChevronRight size={20} className="text-muted-foreground" />
              </div>
            </button>
            <button className="w-full h-14 px-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <Sliders size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Amount Tolerance
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">$0.50</span>
                <ChevronRight size={20} className="text-muted-foreground" />
              </div>
            </button>
          </div>
        </div>

        {/* Ingestion Section */}
        <div className="mt-6">
          <div className="px-6 mb-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Ingestion
            </h3>
          </div>
          <div className="bg-card">
            <div className="w-full h-14 px-6 flex items-center justify-between border-b border-border">
              <span className="text-sm font-medium text-foreground">
                Auto-import SMS
              </span>
              <Switch
                checked={autoImportSMS}
                onCheckedChange={setAutoImportSMS}
              />
            </div>
            <button className="w-full h-14 px-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <span className="text-sm font-medium text-foreground">
                Ingestion Profiles
              </span>
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Data Section */}
        <div className="mt-6">
          <div className="px-6 mb-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Data
            </h3>
          </div>
          <div className="bg-card">
            <button className="w-full h-14 px-6 flex items-center justify-between hover:bg-accent/50 transition-colors border-b border-border">
              <div className="flex items-center gap-3">
                <Database size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Export Ledger
                </span>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
            <button className="w-full h-14 px-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <Database size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-destructive">
                  Reset All Data
                </span>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Appearance Section */}
        <div className="mt-6">
          <div className="px-6 mb-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Appearance
            </h3>
          </div>
          <div className="bg-card">
            <div className="w-full h-14 px-6 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Dark Mode
              </span>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>
        </div>

        {/* App Info */}
        <div className="px-6 mt-8 text-center">
          <div className="text-sm text-muted-foreground">LedgerMesh v1.0.0</div>
          <div className="text-xs text-muted-foreground mt-1">
            Built for trustworthy financial reconciliation
          </div>
        </div>
      </div>
    </div>
  );
}