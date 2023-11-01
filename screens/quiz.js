import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Quiz = () => {
  const navigation = useNavigation();
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState();

  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionAndShuffle(data.results[0]));
  };

  const shuffleArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionAndShuffle(questions[ques + 1]));

    if (selectedOption === questions[ques].correct_answer) {
      setScore(score + 10);
    } else {
      setScore(score - 10);
    }
  };

  const generateOptionAndShuffle = (question) => {
    const options = [...question.incorrect_answers];
    options.push(question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    // if (option === questions[ques].correct_answer) {
    //   setScore(score + 10);
    // } else {
    //   setScore(score - 10);
    // }
  };

  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };

  useEffect(() => {
    getQuiz();
  }, []);

  // console.log("answer", questions && questions[ques].correct_answer);

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q{ques + 1}. {decodeURIComponent(questions[ques].question)}
            </Text>
          </View>
          <View style={styles.options}>
            {options.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={
                  selectedOption === item
                    ? styles.selectedOption
                    : styles.optionButton
                }
                onPress={() => handleSelectedOption(item)}
              >
                <Text style={styles.option}>{decodeURIComponent(item)}</Text>
              </TouchableOpacity>
            ))}
            {/* <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[1])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[2])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[3])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity> */}
          </View>

          {questions?.length - 1 !== ques && (
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleNextPress}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {questions?.length - 1 === ques && (
            <TouchableOpacity style={styles.button} onPress={handleShowResult}>
              <Text style={styles.buttonText}>SHOW RESULT</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  selectedOption: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#1A759F",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});
