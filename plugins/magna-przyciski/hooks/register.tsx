import type { Register } from 'claude-code'

const B: { key: string; label: string; text: string }[] = [
  { key: 'plan', label: 'Plan dzienny',
    text: 'Zrób raport dzienny (plan dzienny) na dziś: pobierz aktualne dane z weclapp i opublikuj raport. Trzymaj się zasad z projektu.' },
  { key: 'pak', label: 'Lista do pakowania',
    text: 'Zrób listę do pakowania na dziś z aktualnych danych weclapp (artefakt listy pakowania + PDF).' },
  { key: 'foto', label: 'Zdjęcia: sklejone i spakowane',
    text: 'Zdjęcia gotowe: odczytaj grupę WhatsApp „Magna Atelier Claude”, wpisz w weclapp sklejone (Kleben) i spakowane (Verpacken), potem zaktualizuj plan dzienny i listę do pakowania.' },
  { key: 'rys', label: 'Rysunki',
    text: 'Pokaż ważne rysunki: zamówienia, które czekają na rysunek lub mają rysunek do zapisania pod numerem zamówienia (z „Czekam” i przypomnień), z numerem PA i klientem.' },
  { key: 'trasa', label: 'Plan trasy',
    text: 'Zaplanuj następną trasę MAGNA dla Michaela wg kod/zasady_planowania_tras.md: plan dnia z godzinami, przerwami i 11 h odpoczynku, plus wszystko, co można dołożyć (także ponad limit czasu, z oznaczeniem).' },
]

export const register: Register = on => {
  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.props.hasSurvey) return next(e)
    const { Box, Button, Text } = $.ui.resolve(e)
    return (
      <Box flexDirection="row" flexWrap="wrap" gap={1}>
        <Text dimColor>Magna:</Text>
        {B.map(b => (
          <Button key={b.key} label={b.label} onPress={() => { void $.prompt.submit({ text: b.text }) }} />
        ))}
      </Box>
    )
  })
}
