// Decoder

do
{
    Block.ReadHeader(); // читаем заголовок блока
    /*определяем необходимые действия по разжатию в
    соответствии с типом блока
    */
    switch (Block.Type)
    {
    case NO_COMP: // данные не сжаты, просто копируем их
        /*заголовок блока не выровнен на границу байта,
        сделаем это
        */
        Block.SeekNextByte();
        Block.ReadLen(); // читаем длину блока
        /•копируем данные блока из входного файла
                сжатых данных в результирующий DataFile
                    * /
            PutRawData(Window, Block, DataFile);
        break;
    case DYN_HUF:
        /*блок данных сжат с помощью динамически
        построенных кодов Хаффмана, прочитаем их
        */
        Block.ReadHuffmanCodes();
    case FIXED_HUF:
        for (;;)
        {
            /*прочтем один символ алфавита литералов и
            длин совпадения
            */
            value = Block.DecodeSymbol();
            if (value < 256)
                // это литерал, запишем его в выходной файл
                DataFile.WriteSymbol(value);
            else if (value == 256)
                // знак конца блока
                break;
            else
            {
                // это закодированный указатель
                match_len = Block.DecodeLen();
                match_pos = Block.DecodePos();
                /*скопируем соответствующую фразу из словаря
                        в выходной файл
                */
                CopyPhrase(Window, match_len, match_pos,
                           DataFile);
            }
        };
        break;
    default:
        // Ошибка в блоке данных
        throw BadData(Block);
    }
} while (!IsLastBlock);

// CODER

// минимальная длина совпадения
const int THRESHOLD = 3;
// смещение и длина совпадения для match(t+l)
int prev_pos,
    prev_len;
// смещение и длина совпадения для match(t+2)
int match_pos,
    match__len = THRESHOLD - 1;
// признак отложенного кодирования фразы match(t+l)

int match_available = 0;
prev_pos = match_pos;
prev_len = match_len;
/* найдем максимальное(или достаточно длинное) совпадение
для позиции t + 2 */
find_phrase(Smatch_pos, Smatch_len);
if (prev_len >= THRESHOLD &&
    match_len <= prev_len)
{
    /* считаем, что выгоднее закодировать фразу
    match(t+1)
    */
    encode_phrase(prev_pos, prev_len);
    match_available = 0;
    match_len = THRESHOLD - 1;
    // сдвинем окно на match_len{t+1)-1 символов
    move_window(prev_len - l);
    t += prev_len - l;
}
else
{
    // отложим решение о кодировании на один шаг
    if (match_available)
    {
        /* кодирование литерала st + i или фразы match(t + 1)
        было отложено;кодируем литерал st + i
        */
        encode_literal(window[t + 1]);
    }
    else
    {
        match_available = 1.;
    }
    move_window(1);
    t++;
}


