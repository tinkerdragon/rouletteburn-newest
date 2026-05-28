import { NS } from "@ns";
import RouletteHelper from "@/ui/RouletteHelper/RouletteHelper";

export async function main(ns: NS): Promise<void> {
  roulette(ns)

  while(true) {
    await ns.asleep(2000)
  }
}

export function roulette(ns: NS): void {
  ns.disableLog("ALL")
  ns.clearLog()

  // Explicit structural typing to safely bypass outdated game UI definitions without using 'any'
  const gameUi = ns.ui as unknown as {
    closeTail: () => void
    openTail: () => void
    resizeTail: (width: number, height: number) => void
    moveTail: (x: number, y: number) => void
  }

  // Cleans up react element after exit
  ns.atExit(() => {
    ns.clearLog()
    gameUi.closeTail()
  })

  gameUi.openTail()
  gameUi.resizeTail(750, 500)
  gameUi.moveTail(350, 450)

  ns.printRaw(React.createElement(RouletteHelper))
}