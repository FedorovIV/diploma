// Coder

while (!DataFile.EOFO)
{
    /*найдем максимальное совпадение; в match_pos получим
    смещение i, в match_len - длину j , в unmatched_sym -
    первый несовпавший символ; считаем также, что в
    функции find_match учитывается ограничение на длину
    совпадения
    */
    find_match(&match_pos, &match_len, &unmatched_sym);
    /*запишем в файл сжатых данных описание найденнойфразы,
    при этом длина битового представления i
    задается константой OFFS_LN, длина представления
    j - константой LEN_LN, размер символа s принимаем
    равным 8 битам
    */
    CompressedFile.WriteBits(match_pos, OFFS_LN);
    CompressedFile.WriteBits(match_len, LEN_Ltl);
    CompressedFile.WriteBits(unmatched_sym, 8);
    for (i = 0; i <= match_len; i++)
    {
        // прочтем очередной символ
        с = DataFile.ReadSymbol();
        // удалим из словаря одну самую старую фразу
        DeletePhrase();
        /*добавим в словарь одну фразу, начинающуюся с
        первого символа буфера
        */
        AddPhrase();
        /*сдвинем окно на 1 позицию, добавим в конец буфера
        символ с
        */
        MoveWindow(с);
    }
}
CompressedFile.WriteBits(0, OFFS_LN);

// Decoder

for (;;)
{
    // читаем смещение
    match_pos = CompressedFile.ReadBits(OFFS_LN);
    if (!match_pos)
        // обнаружен признак конца файла, выходим из цикла
        break;
    // читаем длину совпадения
    match_len = CompressedFile.ReadBits(LEN_LN);
    for (i - 0; i < match_len; i++)
    {
        /*находим в словаре очередной символ совпавшей фразы
         */
        с = Diet(match_pos + i);
        /*сдвигаем словарь на одну позицию, добавляем в его
        начало с
        */
        MoveDict(с);
        /*записываем очередной раскодированный символ
        в выходной файл */
        DataFile.WriteSymbol(с);
    }
    /*читаем несовпавший символ, добавляем его в словарь
    и записываем в выходной файл
    */
    с = CompressedFile.ReadBits(8);
    MoveDict(с);
    DataFile.WriteSymbol(с);
}

