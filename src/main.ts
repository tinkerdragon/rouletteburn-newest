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
  // Cleans up react element after exit
  ns.atExit(() => {
    ns.clearLog()
    (ns.ui as any).closeTail()
  })

  (ns.ui as any).openTail()
  (ns.ui as any).resizeTail(750, 500)
  (ns.ui as any).moveTail(350, 450)

  ns.printRaw(React.createElement(RouletteHelper))
}
