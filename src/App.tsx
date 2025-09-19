import { FormEvent, useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Fade,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { getZeroKcalMessage } from "./data/responses";

interface HistoryItem {
  id: number;
  label: string;
  verdict: string;
  createdAt: number;
}

const MAX_HISTORY = 5;

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const placeholder = useMemo(
    () => "例：白米特盛、おはぎ、秋刀魚と炊き込みご飯",
    []
  );

  const openXIntent = (text: string) => {
    const tweetUrl = new URL("https://twitter.com/intent/tweet");
    tweetUrl.searchParams.set("text", text);
    window.open(tweetUrl.toString(), "_blank", "noopener,noreferrer");
  };

  const handleShare = () => {
    if (!message) {
      return;
    }

    const appUrl = "https://y-sasaki-tech.github.io/hakumai-0kcal/";
    const shareBody = `${message}\n${appUrl}\n#魔法のカロリー診断`;

    if (navigator.share) {
      navigator
        .share({ text: shareBody })
        .catch(() => {
          openXIntent(shareBody);
        });
      return;
    }

    openXIntent(shareBody);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const verdict = getZeroKcalMessage(input);
    setMessage(verdict);

    if (input.trim()) {
      setHistory((prev) =>
        [{
          id: Date.now(),
          label: input.trim(),
          verdict,
          createdAt: Date.now()
        }, ...prev].slice(0, MAX_HISTORY)
      );
    }

    setInput("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(180deg, #F8F1E3 0%, #F3E3C4 100%)",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Stack spacing={4}>
          <Stack spacing={1.5} alignItems="center" textAlign="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(199, 107, 51, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <LocalDiningRoundedIcon color="primary" fontSize="large" />
            </Box>
            <Typography variant="h4" component="h1" fontWeight={600}>
              魔法のカロリー診断
            </Typography>
            <Typography variant="body1" color="text.secondary">
              あなたが食べたものやこれから食べる物の名前をいれると、
              カロリー診断を実施し結果を即時にお届けいたします。
            </Typography>
          </Stack>

          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <Stack component="form" spacing={3} onSubmit={handleSubmit}>
              <TextField
                label="食べ物の名前をいれる"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={placeholder}
                autoFocus
                fullWidth
              />
              <Button type="submit" variant="contained" size="large">
                カロリーを診断する
              </Button>
            </Stack>

            <Fade in={Boolean(message)}>
              <Box sx={{ mt: 4 }}>
                <Typography variant="overline" color="secondary" gutterBottom>
                  判定速報
                </Typography>
                <Typography variant="h5" component="p">
                  {message || ""}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
                  <Button
                    variant="outlined"
                    startIcon={<ShareRoundedIcon />}
                    onClick={handleShare}
                    disabled={!message}
                  >
                    Xで共有
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Paper>

          {history.length > 0 && (
            <Paper variant="outlined" sx={{ borderRadius: 4, p: 3 }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                最近の免罪ログ
              </Typography>
              <List disablePadding>
                {history.map((item, index) => (
                  <Box key={item.id}>
                    <ListItem disableGutters>
                      <Stack spacing={0.5}>
                        <Typography variant="body1" fontWeight={500}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.verdict}
                        </Typography>
                      </Stack>
                    </ListItem>
                    {index < history.length - 1 && <Divider sx={{ my: 1.5 }} />}
                  </Box>
                ))}
              </List>
            </Paper>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
