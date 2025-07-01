
import {OpenAI} from 'openai';


const groqConfig = new OpenAI({
  apiKey : process.env.GROK_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

export default groqConfig;

