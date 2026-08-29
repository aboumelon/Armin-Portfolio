import { useEffect, useState } from "react";
import { CircleAlert, CirclePlay } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const NOTICE_STORAGE_KEY = "youtube-access-notice-seen";

export function YoutubeAccessNotice() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(sessionStorage.getItem(NOTICE_STORAGE_KEY) !== "true");
    } catch {
      setOpen(true);
    }
  }, []);

  const acknowledgeNotice = () => {
    try {
      sessionStorage.setItem(NOTICE_STORAGE_KEY, "true");
    } catch {
      // The notice can still be dismissed when browser storage is unavailable.
    }
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md overflow-hidden border-cyan-500/20 bg-background/95 p-0 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
        <div className="h-1 bg-linear-to-r from-red-500 via-cyan-400 to-blue-500" />
        <div className="p-6 sm:p-7">
          <AlertDialogHeader className="items-center text-center sm:text-center">
            <div className="relative mb-2 flex size-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 ring-1 ring-red-500/20">
              <CirclePlay className="size-7" aria-hidden="true" />
              <CircleAlert
                className="absolute -end-1 -top-1 size-5 rounded-full bg-background text-amber-400"
                aria-hidden="true"
              />
            </div>
            <AlertDialogTitle className="text-xl">{t("youtube_notice.title")}</AlertDialogTitle>
            <AlertDialogDescription className="max-w-sm text-sm leading-7">
              {t("youtube_notice.description")}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="mt-6 sm:justify-center">
            <AlertDialogAction
              onClick={acknowledgeNotice}
              className="w-full bg-linear-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 sm:w-auto sm:min-w-36"
            >
              {t("youtube_notice.confirm")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
